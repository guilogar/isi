package transformers;

import org.mule.api.MuleMessage;
import org.mule.api.annotations.ContainsTransformerMethods;
import org.mule.api.transformer.TransformerException;

import java.io.IOException;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.JsonNode;
import org.codehaus.jackson.JsonParseException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;
import org.mule.transformer.AbstractMessageTransformer;

/**
 * @author Juan Boubeta-Puig <juan.boubeta@uca.es>
 *
 */
@ContainsTransformerMethods
public class JsonToSmartRuralTransformer extends AbstractMessageTransformer
{
	static DecimalFormat df2 = new DecimalFormat("#,00");

	@Override
	public synchronized Map<String, Object> transformMessage(
		MuleMessage message, String outputEncoding
	) throws TransformerException
	{

		// LinkedHashMap will iterate in the order in which the entries were put
		// into the map
		Map<String, Object> eventMap = new LinkedHashMap<String, Object>();
		ObjectMapper mapper = new ObjectMapper();
		JsonNode jsonNode = null;

		try
		{
			jsonNode = mapper.readTree(message.getPayloadAsString());
			
			// Event payload is a nested map
			Map<String, Object> eventPayload = new LinkedHashMap<String, Object>();
			
			List<String> fields = new ArrayList<>();
			try
			{
				for(int i = 1; i <= 8; i++)
				{
					String fieldName = jsonNode.get("channel").get("field" + i).getTextValue();
					
					fields.add(fieldName);
				}				
			} catch(Exception e) { }
			
			for(int i = 1; i <= fields.size(); i++)
			{
				if(fields.get(i - 1).equalsIgnoreCase("sensorId"))
				{
					eventPayload.put(fields.get(i - 1), jsonNode.get("feeds").path(0).get("field" + i).asInt());
				} else
				{
					eventPayload.put(fields.get(i - 1), jsonNode.get("feeds").path(0).get("field" + i).asDouble());
				}
			}

			eventPayload.put("name", jsonNode.get("channel").get("name").getTextValue());
			
			eventMap.put("SmartRural", eventPayload);
		} catch (JsonGenerationException e) {
			e.printStackTrace();
		} catch (JsonMappingException e) {
			e.printStackTrace();
		} catch (JsonParseException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		}

		System.out.println("===SmartRural created: " + eventMap);
		
		return eventMap;
	}
}