import {createServer} from "miragejs"


function MockServer() {

  let server = createServer(
      {
          routes(){
              this.urlPrefix = "https://www.testdomain.com"; 
              this.namespace = "/v1/api";
              this.timing = 5000;

              this.get('/books', ()=>{
                  return [
                      {
                          title: "theory of everything",
                          author: "Stephen Hawking",
                          year: 2014
                      },
                      {
                          title: "Js 5 eveseknek",
                          author: "unknown",
                          year: 2017
                      },
                      {
                          title: "React 6 eveseknek",
                          author: "brother of Unknown",
                          year: 2019
                      }
                  ]
              } )
          }
      }
  )

  return server
}

export default MockServer