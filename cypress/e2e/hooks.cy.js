describe('Hooks',()=>{
  before(()=>{
    // runs before all test

    // Clean-up code
    // seed database
  })

  beforeEach(()=>{
    // runs before each test 

    // cy.visit('/')
  })

  afterEach(() => {
    // runs after each test 
    
    // cy.visit('/')
  })

  after(() => {
    // runs after all tests


    // Clean-up code
    // remove database data
  })
})