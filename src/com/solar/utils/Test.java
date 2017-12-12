package com.solar.utils;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.Map;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.solar.bean.Student;

import java.io.IOException;
import java.io.InputStream;

public class Test {
	public static void main(String[] args) {
		FileInputStream fis = null;
		InputStreamReader reader = null;
		ObjectMapper mapper = new ObjectMapper();
		
		 
		try {
			try {
				fis = new FileInputStream(new File("src/config/config.json")); 
				reader = new InputStreamReader(fis, "utf-8");
				Map<String, Object> map1 = mapper.readValue(reader, HashMap.class);
				System.out.println(mapper.writeValueAsString(map1));
			} catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
			} finally {
				if (reader != null)
					reader.close();
				if (fis != null)
					fis.close();
			}

		} catch (Exception e) {
			e.printStackTrace();
		}

	}
}
