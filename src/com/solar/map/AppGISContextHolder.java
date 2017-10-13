package com.solar.map;

import com.solar.web.gis.GisProcessor;

public final class AppGISContextHolder {
	private static GisProcessor gisProcesser;
	
	public static GisProcessor getGisProcesser() {
		return gisProcesser;
	}
	
	public static void init(String mapdir) {
		gisProcesser = new GisProcessor();
		gisProcesser.init(mapdir);
	}
	
}
