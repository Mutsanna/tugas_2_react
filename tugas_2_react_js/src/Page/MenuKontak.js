import React, { Component } from 'react'
 class MenuKontak extends Component {
     constructor(props) {
         super(props);
         this.state={
             alamat:"JL.Swadaya IV, Pd.Ranggon Cipayung,Kota Jakrata Timur,Daerah Khusus IbuKota Jakarta 13860",
             kontak:"0813123456678"
         }
     }
     render() {
         return(
             <div>
                 <center>
                     <h3>{this.state.alamat}</h3>
                     <h4>Kontak kami : {this.state.kontak}</h4>
                 </center>
             </div>
         )
     }
 }

 export default MenuKontak;