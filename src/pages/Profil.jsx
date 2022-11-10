import React, { useEffect, useState } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography } from 'mdb-react-ui-kit';
import { getUserProfileById } from '../api/user';
import { getPublicOfferByUserId, getUploadedFile } from '../api/offer';
import { useParams } from 'react-router-dom';
export default function Profil() {
    const [offer, setOffer] = useState();
    const [user, setUser] = useState();
    const [image, setImage] = useState(null);
    const {id} = useParams();


    useEffect( () => {
        getUserProfileById(id)
            .then(res => {
                console.log(res)
                setUser(res)
                if(res && res.profile_picture){

                    getUploadedFile(res.profile_picture)
                        .then(value => {
                            const url = window.URL || window.webkitURL;
                            const blobUrl = url.createObjectURL(value);
                            setImage(blobUrl)
                        })}
            })
            .catch(err => console.log(err))
    }, [id])

    useEffect(() => {
        if(!user) return
        getPublicOfferByUserId(user.id)
            .then(res => {
                console.log(res)
                setOffer(res)
            })
            .catch(err => console.log(err))
    }, [user])

  return (
    <div className="gradient-custom-2" >
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7">
            <MDBCard>
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }} >
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                  <MDBCardImage src={image??"https://th.bing.com/th/id/R.7f70ccdaea42a3ea7f34f470040c1b29?rik=XpAJhC2Net1BXg&pid=ImgRaw&r=0"}
                    alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                </div>
                <div className="ms-3" style={{ marginTop: '130px' }}>
                  <MDBTypography tag="h5">{user? user.firstname:''}</MDBTypography>
                  <MDBTypography tag="h5">{user? user.lastname:''}</MDBTypography>
                  
                </div>
              </div>
              <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="d-flex justify-content-end text-center py-1">
                  <div>
                    <MDBCardText className="mb-1 h5">253</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Photos</MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">1026</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Followers</MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5">478</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Following</MDBCardText>
                  </div>
                </div>
              </div>
              <MDBCardBody className="text-black p-4">

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBCardText className="lead fw-normal mb-0">Annonce Récent</MDBCardText>
                  <MDBCardText className="mb-0"><a href="#!" className="text-muted">Voir Plus</a></MDBCardText>
                </div>
                <MDBRow>
                    
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}