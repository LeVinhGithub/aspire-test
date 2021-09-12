package helper;

import java.text.SimpleDateFormat;
import java.util.Calendar;

public class DateHelper {
	private static DateHelper instance = null;
    protected DateHelper() {
    }
    public static DateHelper Instance() {
        if(instance == null) {
            instance = new DateHelper();
        }
        return instance;
    } 
    
    public static String getTodayString(String formatTime) {
		return new SimpleDateFormat(formatTime).format(Calendar.getInstance().getTime());
	}
}
