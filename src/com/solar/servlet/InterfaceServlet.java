package com.solar.servlet;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;
import java.util.ResourceBundle;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

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
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub

		FileInputStream fis = null;
		InputStreamReader reader = null;
		ObjectMapper mapper = new ObjectMapper();
		try {
			String path = InterfaceServlet.class.getClassLoader().getResource("config/config.json").getPath(); 
			InputStream in = InterfaceServlet.class.getClassLoader().getSystemClassLoader().getResourceAsStream(path);
			fis = new FileInputStream(new File(path));
			reader = new InputStreamReader(fis, "utf-8");
			Map<String, Object> map = mapper.readValue(reader, HashMap.class);

			String ip = (String) map.get("ip");

			response.setCharacterEncoding("utf-8");
			PrintWriter out = response.getWriter();
			out.println(ip);

		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		} finally {
			if (reader != null)
				reader.close();
			if (fis != null)
				fis.close();
		}

	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		String param = request.getParameter("ip");

		FileInputStream fis = null;
		InputStreamReader reader = null;
		ObjectMapper mapper = new ObjectMapper();

		try {
			String path = InterfaceServlet.class.getClassLoader().getResource("config/config.json").getPath();
			InputStream in = InterfaceServlet.class.getClassLoader().getSystemClassLoader().getResourceAsStream(path);
			fis = new FileInputStream(new File(path));
			reader = new InputStreamReader(fis, "utf-8");
			Map<String, Object> map = mapper.readValue(reader, HashMap.class);
			map.put("ip", param);
			boolean state = writeInfoToFile(mapper.writeValueAsString(map), path);

			PrintWriter out = response.getWriter();
			out.println(state);

		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		} finally {
			if (reader != null)
				reader.close();
			if (fis != null)
				fis.close();
		}

		 
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
