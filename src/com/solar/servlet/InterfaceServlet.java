package com.solar.servlet;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ResourceBundle;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class InterfaceServlet
 */
@WebServlet("/InterfaceServlet")
public class InterfaceServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public InterfaceServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String param = request.getParameter("url");
		String path = System.getProperty("catalina.home");
		path += "\\webapps\\SeaCharts\\WEB-INF\\classes\\config\\interface.properties";
		boolean state = writeInfoToFile("url="+param, path);
		
		PrintWriter out = response.getWriter();
		out.println(state);
	}

	public static void main(String[] args) {
		String path = System.getProperty("catalina.home");
		path += "\\webapps\\SeaCharts\\WEB-INF\\classes\\config\\interface.properties";
		writeInfoToFile("url=123", path);
	}
	
	public static boolean writeInfoToFile(String info, String url) { 
		try {
			File txt = new File(url);
			if (!txt.exists()) {
				txt.createNewFile();
			}
			byte bytes[] = new byte[1024];
			bytes = info.getBytes(); // 新加的
			int b = info.length(); // 改
			FileOutputStream fos = new FileOutputStream(txt);
			fos.write(bytes);
			fos.close();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return false;
		}
		return true;
	}
}
