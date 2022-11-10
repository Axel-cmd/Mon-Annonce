import React, { useEffect } from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
} from 'mdb-react-ui-kit';
import { useAuth } from '../contexts/auth.context';
import { getUploadedFile } from '../api/offer';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MyProfil() {

  const navigate = useNavigate();
  const {user} = useAuth();
  const [image, setImage] = useState(null);
  const [pieceIenditite, setPieceIdentite] = useState(null);

    useEffect(() => {
      console.log(user)
        getUploadedFile(user.profile_picture)
        .then(value => {
            const url = window.URL || window.webkitURL;
            const blobUrl = url.createObjectURL(value);
            setImage(blobUrl)
        })
        getUploadedFile(user.identifical_file)
        .then(value => {
            const url = window.URL || window.webkitURL;
            const blobUrl = url.createObjectURL(value);
            setPieceIdentite(blobUrl)
        })}
        
    , [user])
  return (
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
              <MDBCardImage
                  src={image ?? ""}
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '50px' }}
                  fluid /><hr/>
                <MDBCardImage
                  src={pieceIenditite ?? ""}
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '50px' }}
                  fluid /><hr/>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn onClick={() => navigate('/updateProfil')} >Modifier Profil</MDBBtn>
                </div>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn variant="primary" onClick={() => navigate('/addProduct')} >Add Product</MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Firstname</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{user ?user.firstname : ""}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Lastname</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{user ?user.lastname :""}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{user ?user.email : ""}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Téléphone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{user ?user.phone : ""}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Adresse Postale</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{user ?user.address : ""}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Code Postale</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{user ?user.zip_code : ""}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Ville</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{user ?user.city : ""}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Pays</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{user ?user.country : ""}</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}