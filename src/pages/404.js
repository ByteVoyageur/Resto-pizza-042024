import Link from 'next/link'
import React from 'react'

function CustomError() {
  return (
    <div className='error-pages'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-8'>
            <div className='error-content text-center'>
              <h2>Ooops!</h2>

              <p>
                La page n'est pas trouvée, une erreur s'est produite. Retourner
                à la page d'accueil.
              </p>
              <Link legacyBehavior href='/'>
                <a className='primary-btn7 btn-md2'>
                  <i className='bi bi-arrow-up-right-circle' />
                  Page d'accueil
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomError
