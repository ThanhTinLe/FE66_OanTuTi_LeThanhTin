export const SET_SO_BAN_CHOI = "SET_SO_BAN_CHOI";
export const SET_HINH_ANH = "SET_HINH_ANH";
export const RANDOM_HINH_ANH = "RANDOM_HINH_ANH";
export const SET_SO_BAN_THANG = "SET_SO_BAN_THANG";
export const SET_SO_TIEN = "SET_SO_TIEN";

export const setSoBanChoi = (value) => {
    return {
        type: SET_SO_BAN_CHOI,
        value: value
    }
}
export const setSoBanThang = (value) => {
    return {
        type: SET_SO_BAN_THANG,
        value: value
    }
}

export const setHinhAnh = (value) => {
    return {
        type: SET_HINH_ANH,
        value: value
    }
}

export const randomHinhAnhMay = (value) => {
    return {
        type: RANDOM_HINH_ANH,
        value: value
    }
}

export const setSoTien = (value, abc) => {
    return {
        type: SET_SO_TIEN,
        value: {
            value:value,
            abc:abc
        }
    }
}