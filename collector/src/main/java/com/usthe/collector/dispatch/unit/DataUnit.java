package com.usthe.collector.dispatch.unit;

/**
 * the enum of data size
 * 数据空间大小的枚举类
 * @author ceilzcx
 * @since 2022/10/03
 */
public enum DataUnit {
    B("B", 1),
    KB("KB", 1024),
    // 1024 * 1024
    MB("MB", 1_048_576),
    // 1024 * 1024 * 1024
    GB("GB", 1_073_741_824);

    private final String unit;
    private final long scale;

    private DataUnit(String unit, long scale) {
        this.unit = unit;
        this.scale = scale;
    }

    public String getUnit() {
        return unit;
    }

    public long getScale() {
        return scale;
    }
}
