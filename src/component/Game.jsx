import React, { useEffect, useRef } from 'react'
import './home.css'
import { connect, useSelector, useDispatch } from 'react-redux'
import { setSoBanChoi, setHinhAnh, randomHinhAnhMay,setSoBanThang,setSoTien } from './../redux/action/gameAction'
import {  } from './../redux/action/gameAction'

const arrHinhAnh = [
  './image/keo.png',
  './image/bua.png',
  './image/bao.png'
]

function Game() {
  

  const { hinhAnhMay } = useSelector(state => state.gameReducer);
  const { soBanChoi } = useSelector(state => state.gameReducer);
  const { soBanThang } = useSelector(state => state.gameReducer);
  const { soTien } = useSelector(state => state.gameReducer);
  const { hinhAnh } = useSelector(state => state.gameReducer);
  
  const dispatch = useDispatch();

  const thayDoiHinh = (hinhAnhClick) => {
    dispatch(setHinhAnh(hinhAnhClick));
  }

  const ref = useRef(0);

  useEffect(() => {

      document.getElementById("soTienCuocBTN").addEventListener('click',()=>{
        if(document.getElementById("nhapTienCuoc")){
          ref.current = document.getElementById("nhapTienCuoc").value;
          if(ref.current < 1){
            alert("thiếu tiền")
          }else if(ref.current > soTien){
            alert("không đủ tiền");
          }else{
            checkWin();
          }
        }
      });

    
  }, [])

  // const handleInput = (event) =>{
  //   let {value,name} = event.target;
  //   return value;
  // }
  const checkWin = () =>{
    let hinhMay = arrHinhAnh[Math.floor(Math.random()*arrHinhAnh.length)];
    if(hinhAnh === hinhMay){
      alert('hòa');
    }else{
      if(hinhAnh === "./image/keo.png"){
        if(hinhMay === "./image/bua.png"){
            alert('thua');
            dispatch(setSoTien(Number(ref.current),1));
        }else{
          dispatch(setSoBanThang(soBanThang + 1))
          dispatch(setSoTien(Number(ref.current),2));
        }
      }else if(hinhAnh === "./image/bua.png"){
        if(hinhMay === "./image/bao.png"){
            alert('thua');
            dispatch(setSoTien(Number(ref.current),1));
        }else{
          dispatch(setSoBanThang(soBanThang + 1))
          dispatch(setSoTien(Number(ref.current),2));
        }
      }else if(hinhAnh === "./image/bao.png"){
        if(hinhMay === "./image/keo.png"){
            alert('thua');
            dispatch(setSoTien(Number(ref.current),1));
        }else{
          dispatch(setSoBanThang(soBanThang + 1))
          dispatch(setSoTien(Number(ref.current),2));
        }
      }
    }
    dispatch(randomHinhAnhMay(hinhMay));
    
    // alert(TongTien);
  }
  return (
    <div className="container-fluid text-center home pt-5" style={{ backgroundImage: "url(./image/bgGame.png)" }}>
      <div className="row">
        <div className="col-4">
          <div className="speech-bubble" style={{ height: "75px", width: "75px", margin: "0 auto" }}>
            <div className="hinh border border-dark" style={{ width: '70px', height: "70px" }}>
              <img src={hinhAnh} width="70" className="p-1" />
            </div>
          </div>
          <img id="hinhUser" src="./image/player.png" width="150" className="pt-4" />
          <div className="chon__hinh container">
            <div className="row" style={{ justifyContent: 'center' }}>
              <div className="col-3 pl-5">
                <button style={{ padding: '2px' }} className="btn-chon" onClick={() => {
                  thayDoiHinh("./image/keo.png");
                }}><img src="./image/keo.png" alt="...." width="50" className="bg-white border border-dark p-3" /></button>
              </div>
              <div className="col-3">
                <button style={{ padding: '2px' }} className="btn-chon" onClick={() => {
                  thayDoiHinh("./image/bua.png");
                }}><img src="./image/bua.png" alt="...." width="50" className="bg-white border border-dark p-3" /></button>
              </div>
              <div className="col-3 pr-5">
                <button style={{ padding: '2px' }} className="btn-chon" onClick={() => {
                  thayDoiHinh("./image/bao.png");
                }}><img src="./image/bao.png" alt="...." width="50" className=" bg-white border border-dark p-3" /></button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <h1 className="text-warning p-3">I'm iron man, i love you 3000!!</h1>
          <h1 className="text-success">Số bàn thắng:<span className="text-warning">{soBanThang}</span></h1>
          <h1 className="text-success">Số bàn chơi: <span className="text-warning">{soBanChoi}</span></h1>
          <button type="button" class="btn btn-success btn-lg" data-toggle="modal" data-target="#modelId">Play game</button>
        </div>
        <div className="col-4">
          <div className="speech-bubble" style={{ height: "75px", width: "75px", margin: "0 auto" }}>
            <div className="hinh border border-dark" style={{ width: '70px', height: "70px" }}>
              <img src={hinhAnhMay} width="70" className="p-1" />
            </div>
          </div>
          <img src="./image/playerComputer.png" width="150" className="pt-4" />
        </div>
      </div>


      <form className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">số dư: {soTien}</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="container-fluid">
                    <label htmlFor="">Nhập số tiền cược</label><br />
                    <input type="number" name="tienCuoc" id="nhapTienCuoc" min="1"/>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">nghĩ chơi</button>
                  <button type="button" className="btn btn-primary" data-dismiss="modal" id="soTienCuocBTN" onClick={
                    ()=>{
                      dispatch(setSoBanChoi(soBanChoi + 1));
                    }
                  }>chơi tới bến</button>
                </div>
              </div>
            </div>
          </form>
    </div>
  )
}

export default Game
