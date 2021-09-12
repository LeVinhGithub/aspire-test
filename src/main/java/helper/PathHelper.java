package helper;

import java.io.File;

public class PathHelper {
	 private static PathHelper instance = null;
	    protected PathHelper() {
	    }
	    public static PathHelper Instance() {
	        if(instance == null) {
	            instance = new PathHelper();
	        }
	        return instance;
	    }

	    public static String DirProjectPath = System.getProperty("user.dir");
	    public static String dirLogsPath = CombinePath(DirProjectPath,"Logs");
	    public static String dirReportPath = CombinePath(DirProjectPath,"Reports");
	    public static String dirScreenshotPath = CombinePath(DirProjectPath,"Screenshots");

	    public static String fileReportPath = "";
	    public static String fileWebScreenshotPath = "";
	    public static String fileMobileScreenshotPath = "";
	    public static String fileLogRollingPath = "";
	    public static String fileLogTestCasePath = "";

	    public static String CombinePath(String path1, String path2)
	    {
	        File file1 = new File(path1);
	        File file2 = new File(file1, path2);
	        return file2.getPath();
	    }
}
