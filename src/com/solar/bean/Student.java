package com.solar.bean;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class Student {

	private String id;
	
	@JsonIgnore
	private String id1;
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getId1() {
		return id1;
	}

	public void setId1(String id1) {
		this.id1 = id1;
	}
	
	
	
}
