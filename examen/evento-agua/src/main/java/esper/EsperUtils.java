package esper;

import com.espertech.esper.common.client.EPCompiled;
import com.espertech.esper.compiler.client.CompilerArguments;
import com.espertech.esper.compiler.client.EPCompileException;
import com.espertech.esper.compiler.client.EPCompiler;
import com.espertech.esper.compiler.client.EPCompilerProvider;
import com.espertech.esper.runtime.client.*;

import java.util.Arrays;
import java.util.Map;

/**
 * @author David Corral-Plaza <david.corral@uca.es>
 */

public class EsperUtils {

	private static EPCompiler epCompiler;
	private static EPRuntime epRuntime;

	/**
	 * Constructor
	 */
	public EsperUtils() {
		synchronized (EsperUtils.class) {
			if (epCompiler == null) {
				System.out.println("*** Starting Esper Compiler ***");
				epCompiler = EPCompilerProvider.getCompiler();
			}

			if (epRuntime == null) {
				System.out.println("*** Starting Esper Runtime ***");
				epRuntime = EPRuntimeProvider.getDefaultRuntime();
			}
		}
	}

	/**
	 * Returns the epCompiler that have been set before
	 *
	 * @return the epCompiler of the engine
	 */
	public static EPCompiler getEpCompiler() {
		synchronized (EsperUtils.class) {
			if (epCompiler == null) {
				System.out.println("epCompiler is not defined");
				throw new RuntimeException("Unable to continue because epCompiler is not defined!");
			}
		}
		return epCompiler;
	}

	/**
	 * Returns the epRuntime that have been set before
	 *
	 * @return the epRuntime of the engine
	 */
	public static EPRuntime getEpRuntime() {
		synchronized (EsperUtils.class) {
			if (epRuntime == null) {
				System.out.println("epRuntime is not defined");
				throw new RuntimeException("Unable to continue because epRuntime is not defined!");
			}
		}
		return epRuntime;
	}

	/**
	 * Returns the deployment id that have been set before
	 *
	 * @return the epDeploymentId used at runtime
	 */
	public static String getDeploymentId() {
		System.out.println("DEPLOYMENTS: " + Arrays.asList(getEpRuntime().getDeploymentService().getDeployments()));
		return getEpRuntime().getDeploymentService().getDeployments()[0];
	}

	/**
	 * Receives and EPL and add it to the Esper Engine with a generic listener
	 *
	 * @param epl
	 *            the EPL to be added to the engine
	 */
	public static EPStatement createEPL(String epl) throws EPCompileException, EPDeployException {
		return deployNewEventPattern(epl).getStatements()[0];
	}

	/**
	 * Calls to the compiler and then deploy the compiled EPL sentence
	 *
	 * @param epl
	 *            The EPL sentence to be compiled
	 * @return The EPL sentence deployed
	 * @throws EPCompileException
	 */
	public static EPDeployment deployNewEventPattern(String epl) throws EPCompileException, EPDeployException {
		return getEpRuntime().getDeploymentService().deploy(compileNewEventPattern(epl));
	}

	/**
	 * Compiles an EPL sentence using the runtime configuration
	 *
	 * @param epl
	 *            The EPL sentence to be compiled
	 * @return The EPL sentence compiled
	 * @throws EPCompileException
	 */
	public static EPCompiled compileNewEventPattern(String epl) throws EPCompileException {
		return getEpCompiler().compile(epl, new CompilerArguments(getEpRuntime().getRuntimePath()));
	}

	/**
	 * Creates a new event type at runtime
	 *
	 * @param epl
	 *            The sentence with the new schema to create
	 * @throws EPCompileException
	 * @throws EPDeployException
	 */
	public static String addNewSchema(String epl) throws EPCompileException, EPDeployException {
		System.out.println("Adding new schema: " + epl);
		return deployNewEventPattern(epl).getDeploymentId();
	}

	/**
	 * Send a new Map event at runtime
	 *
	 * @param event
	 *            The event to send to the CEP engine
	 * @param eventTypeName
	 *            The event type name of the event to send
	 */
	public static void sendEvent(Map<String, Object> event, String eventTypeName) {
		getEpRuntime().getEventService().sendEventMap(event, eventTypeName);
	}

	/**
	 * Checks if the event type name is already in use
	 *
	 * @param eventTypeName
	 *            to check if exists
	 * @return if the event type name exists or not
	 */
	public static boolean eventTypeExists(String eventTypeName) {
		for (String deploymentId : getEpRuntime().getDeploymentService().getDeployments())
			if (getEpRuntime().getEventTypeService().getEventType(deploymentId, eventTypeName) != null)
				return true;
		return false;
	}
}