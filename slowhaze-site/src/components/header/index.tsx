function Header() {
    return(
        <div>
            <div className='header'>
                <img className='header-logo' src='./slowhaze-logo.png' alt='slowhaze-logo' />
                <br />
            </div>
            <div className="header-menu">
                <a className='links-menu'>Fotos</a>
                <a className='links-menu'>Sociais</a>
                <a className='links-menu'>Shows</a>
                <a className='links-menu'>Streaming</a>
            </div>
        </div>
    )
}

export default Header