// import {SET_SO_BAN_CHOI} from './../action/gameAction.jsx'
// import { SET_HINH_ANH } from './../action/gameAction.jsx';
const gameState = {
    soBanThang:0,
    soBanChoi:0,
    soTien:1000000,
    hinhAnh:'./image/keo.png',
    hinhAnhMay:'./image/keo.png'
}



export const gameReducer = (state = gameState, action) => {
    console.log(action);
    switch(action.type){
        case 'SET_SO_BAN_CHOI':{
            state.soBanChoi = action.value;
            return {...state};
        }
        case 'SET_HINH_ANH':{
            state.hinhAnh = action.value;
            console.log(state);
            return {...state};
        }
        case 'RANDOM_HINH_ANH':{
            state.hinhAnhMay = action.value;
            
            return{...state};
        }
        case 'SET_SO_BAN_THANG':{
            state.soBanThang = action.value;
            return {...state};
        }
        case 'SET_SO_TIEN':{
            let soTienUpdate = state.soTien;
            if(action.value.abc === 1){
                soTienUpdate -= action.value.value;
            }else{
                soTienUpdate += action.value.value;
            }
            state.soTien = soTienUpdate;
            return {...state}
        }
        default:{
            return{...state};
        }
    }
    
}

export default gameReducer;