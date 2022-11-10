import React from 'react';
import NavItem from "./NavItem";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';
import { useAuth } from '../contexts/auth.context';

const Footer = () => {


  const { token } = useAuth();

  return (
    <MDBFooter className='text-center' color='white' bgColor='primary'>
      <MDBContainer className='p-4'>


        <section className='mb-4'>
          <p>
            Mon annonce est un site web qui permet au particulier et au professionnel d'avoir une visibilité pour leur offre. Notre but est d'offrir une interface simpliste pour que tout le monde puisse s'y retrouver facilement.
          </p>
        </section>

        <section className=''>
          <MDBRow center>
            <h5 className='text-uppercase'>Liens du site</h5>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='/' className='text-white'>
                    Accueil
                  </a>

                </li>
                <li>
                  <a href='/products' className='text-white'>
                    Produits
                  </a>
                </li>
                
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>

              <ul className='list-unstyled mb-0'>

                {token ? (
                  <>
                    <li>
                      <a href='/MyProfil' className='text-white'>
                        Mon profil
                      </a>
                    </li>
                    <li>
                      <a href='/' className='text-white'>
                        Mes annonces
                      </a>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <a href='/login' className='text-white'>
                        Connexion
                      </a>
                    </li>
                    <li>
                      <a href='/register' className='text-white'>
                        Créer un compte
                      </a>
                    </li>
                  </>
                )}

              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright:  
        <a className='text-white' href='http://localhost:3000/'>
          Mon Annonce
        </a>
      </div>
    </MDBFooter>
  )
}

export default Footer