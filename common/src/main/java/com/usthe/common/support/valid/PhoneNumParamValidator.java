package com.usthe.common.support.valid;

import com.usthe.common.util.CommonUtil;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

/**
 * PhoneNum注解数据自定义校验器
 * @author tomsun28
 * @date 2021/11/17 19:44
 */
public class PhoneNumParamValidator implements ConstraintValidator<PhoneNumValid, String> {

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        // 判断value是否满足ipv4 ipv5 域名 格式
        return CommonUtil.validatePhoneNum(value);
    }
}
