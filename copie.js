if(2>6){ return (
    <>
      <div className='md:ml-64'>
        <Button className=' py-2 px-4' onClick={() => setAdmin(false)}>
          {" "}
          Toggle Admin
        </Button>
        <Routes>
          <Route path='/chefs/:id' element={<Chefdepartement />} />
          <Route path='/profileService/:id' element={<ProfileService />} />
          <Route path='/Admin/infos' element={<AdminInformations />} />
          <Route path='/Admin/reclamations' element={<AdminReclamations />} />
          <Route path='/Admin/Ajout' element={<AdminAjout />} />
          <Route path='/login' element={<Login />} />
          <Route path='/*' element={<Navigate to='/Admin/infos' />} />
        </Routes>
        <Footer />
      </div>
    </>
  );} else if(0>6) {
    return direction === "rtl" ? (
      <CacheProvider value={rtlCache}>
        <ThemeProvider theme={darkMode ? themeDarkRTL : themeRTL}>
          <CssBaseline />
          {layout === "dashboard" && (
            <>
              <Sidenav
                color={sidenavColor}
                brand={brandWhite || whiteSidenav ? brandDark : brandWhite}
                brandName='Material Dashboard 2'
                routes={routes}
                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}
              />
              <Configurator />
              {configsButton}
            </>
          )}
          {layout === "vr" && <Configurator />}
          <Routes>
            {getRoutes(routes)}
            <Route path='*' element={<Navigate to='/dashboard' />} />
          </Routes>
        </ThemeProvider>
      </CacheProvider>
    ) : (
      <ThemeProvider theme={darkMode ? themeDark : theme}>
        <CssBaseline />
        {layout === "dashboard" && (
          <>
            <Sidenav
              color={sidenavColor}
              brand={
                (transparentSidenav && !darkMode) || whiteSidenav
                  ? brandDark
                  : brandWhite
              }
              
              brandName='Material Dashboard 2'
              routes={routes}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
            />
            
            <Configurator />
            {configsButton}
          </>
        )}
        {layout === "vr" && <Configurator />}
        <Routes>
          <CssBaseline />
          
          {getRoutes(routes)}
          <Route path='*' element={<Navigate to='/authentication/sign-in' />} />
        </Routes>
      </ThemeProvider>
    );}
    else if(true) {
      return (
        <ThemeProvider theme={darkMode ? themeDark : theme}>
        <CssBaseline />
        {layout === "dashboard" && (
          <>
            <Sidenav
              color={sidenavColor}
              brand={
                (transparentSidenav && !darkMode) || whiteSidenav
                  ? brandDark
                  : brandWhite
              }
              
              brandName='Material Dashboard 2'
              routes={routes}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
            />
            
            <Configurator />
            {configsButton}
          </>
        )}
        {layout === "vr" && <Configurator />} 
        <Routes>
          {getRoutes(routes)}
          <Route path='*' element={<Navigate to='/profile' />} />
        </Routes>
      </ThemeProvider>
      );
    }else {
      return (
        <ThemeProvider theme={darkMode ? themeDark : theme}>
          <DefaultNavbar
          action={{
            type: "external",
            route: "https://creative-tim.com/product/material-dashboard-react",
            label: "free download",
            color: "dark",
          }}
        />
      </ThemeProvider>
      );  
    }