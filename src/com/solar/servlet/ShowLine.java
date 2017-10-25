package com.solar.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.websocket.Session;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.solar.utils.PostMethod;

/**
 * Servlet implementation class ShowLine
 */
@WebServlet("/ShowLine")
public class ShowLine extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ShowLine() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doPost(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String type = "1";
		String jsonStr ="{\"coords\":[[113.20353124999997,22.999098137991353],[115.18107031249998,20.90012155827489]],\"id\":\"rou-c8b30ad9-35fe-9b8a-90db-1b9cf571bbda\",\"orderNumber\":\"L0774201709131001\"}";
		
		 
		jsonStr = jsonStr.replace("\"", "\\\"");
		request.getSession().setAttribute("type", type);
		request.getSession().setAttribute("jsonStr",jsonStr );
		//request.getRequestDispatcher("gis/main.jsp").forward(request, response);
		response.sendRedirect("gis/main.jsp");
		 
	}  

}
