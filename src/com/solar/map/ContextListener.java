package com.solar.map;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;

import org.apache.log4j.PropertyConfigurator;

 
 
@WebListener
public class ContextListener implements ServletContextListener {
 
    /**
     * Initialize log4j when the application is being started
     */
    @Override
    public void contextInitialized(ServletContextEvent event) {
    	System.out.println("初始化ServletContext...");
		
		// 执行定时任务
	 
        // initialize log4j here
        ServletContext context = event.getServletContext();
        String log4jConfigFile = context.getInitParameter("log4j-config-location");
        if (log4jConfigFile == null) {
        	log4jConfigFile = "WEB-INF/log4j.properties";
        }
        String fullPath = context.getRealPath("") + File.separator + log4jConfigFile; 
        PropertyConfigurator.configure(fullPath);
       
    
//        String path = this.getClass().getClassLoader().getResource("/").getPath();
//         File file = new File(path);
//        String dataPath = file.getParentFile().getParent();
//        String path = System.getProperty("user.dir")
//        path = path.substring(0,path.lastIndexOf("\\"));
        String Path = System.getProperty("catalina.home") + "/map"; 
        // 初始化GIS
        AppGISContextHolder.init(Path);
          
        
    }
     
    @Override
    public void contextDestroyed(ServletContextEvent event) {
        // do nothing
    }  
    
     
}