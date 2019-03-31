describe('Request <My Movies />', () =>{
    it('Request response getMovies ', () =>{
        cy.request('http://www.omdbapi.com/?apikey=83f5725d&s=Batman&page=1')
        .should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('Response', "True")
      })
    })

    it('Request response getMoviesByID ', () =>{
        cy.request('http://www.omdbapi.com/?apikey=83f5725d&i=tt0848228')
        .should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('Title').to.equal('The Avengers')
        expect(response.body).to.have.property('Director').to.equal('Joss Whedon')
        expect(response.body).to.have.property('Metascore').to.equal('69')
      })
    })
})