package com.solar.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.solar.utils.PostMethod;

/**
 * Servlet implementation class CommitData
 */
@WebServlet("/CommitData")
public class CommitData extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CommitData() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		 
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
		String data = request.getParameter("data");
		String linename = request.getParameter("linename");
		String line = request.getParameter("line");
		
		ObjectMapper mapper = new ObjectMapper(); 
		Map<String, Object> map = new HashMap<String,Object>(); 
		Map<String, Object> result = new HashMap<String,Object>(); 
		PrintWriter out = response.getWriter();
		try {
			List<Map<String, Object>> datalist = mapper.readValue(data, ArrayList.class);
			map.put("routeName", linename);
			map.put("charts", datalist);
			Map<String, Object> lineMap = mapper.readValue(line,HashMap.class);
			
			//验证是否有订单号
			String id = (String) lineMap.get("id");
			if(id.indexOf("_") > -1){
				String orderNumber = id.substring(id.indexOf("_") + 1,id.length());
				id = id.substring(0,id.indexOf("_") );
				lineMap.put("id", id);
				map.put("orderNumber", orderNumber);
			}else
				map.put("orderNumber", "");
			
			
			map.put("line", lineMap);
			
			System.out.println(mapper.writeValueAsString(map));
			
			Map<String, Object> params = new HashMap<String, Object>();
			//封装参数
			params.put("json",mapper.writeValueAsString(map));
			//访问地址
			String url = "http://localhost:8081/Test/Test1";
			//访问接口，并且把结果存在 postResult参数当中
			String postResult = PostMethod.httpClientPost(url, params, "utf-8");
			System.out.println(postResult);
			
			
			result.put("state", true);
		} catch (JsonParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			result.put("state", false);
		} catch (JsonMappingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			result.put("state", false);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			result.put("state", false);
		} 
		String json = mapper.writeValueAsString(result);
		out.println(json);
	}

}
