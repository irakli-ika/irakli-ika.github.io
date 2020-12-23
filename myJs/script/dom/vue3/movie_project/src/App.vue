<template>
  <header class="text-center">
    <h1 class="pt-3">MyMovies.Ge</h1>
  </header>
  <div class="admin_panel">
    <div class="container">
      <div class="row">
        <button class="btn btn-success" @click="addMovie">Add Movies</button>
      </div>
    </div>
  </div>
  <section class="text-center">
    <edit-form
     v-show='editVisibility'
     :id='editElements.id'
     :name='editElements.name'
     :director='editElements.director'
     :genre='editElements.genre'
     :country='editElements.country'
     :year='editElements.year'
     :description='editElements.description'
     @close-modal='closeModal'
     @save-edit-changes='saveEditChanges'
    ></edit-form>
    <add-form
    v-show='addVisibility'
    @close-modal='closeModal'
    @save-changes='saveChanges'
    ></add-form>
    <div class="container pt-3">
      <div class="row justify-content-center">
        <list-section
          v-for='movie in movies'
          :key='movie.id'
          :id='movie.id'
          :name='movie.name'
          :director='movie.director'
          :genre='movie.genre'
          :country='movie.country'
          :year='movie.year'
          :description='movie.description'
          @edit-element='edit'
          @delete-element='deleteMovie'
        ></list-section>
        
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      movies: [
        {
          id: 'b29ff77e-48a8-4d5d-8f2e-1945e45790e2',
          name: 'უძინართა მზე',
          year: '1992',
          director: 'თემურ ბაბლუანი',
          country: 'საქართველო',
          description: 'ექიმი გელას დრამატიული ისტორია: იგი მრავალი წლის განმავლობაში ცდილოს შექმნას წამალი კიბოს წინააღმდეგ. ფილმის მოქმედება ხდება მეოცე საუკუნის უაღრესად გაჭირვებულ პერიოდში. გელამ თითქმის მიაღწია თავის საწადელს, მაგრამ მას მთელი თავისი სიცოცხლის შრომა წყალში თავისსავე შვილმა ჩაუყარა, გოგონას მამა ფანატიკოსად ეჩვენებოდა და თავისი მოქმედებით იგი მამის "სენისგან" განკურნებას ცდილობდა.',
          image: 'udzinarta_mze.jpg'
        },
        {
          id: 'c5b23480-46ee-4838-b1a4-5ca345fa26d0',
          name:'ჯარისკაცის მამა', 
          year: '1965',
          director: 'რეზო ჩხეიძე',
          country: 'საქართველო',
          description: 'კახელი გლეხი გიორგი მახარაშვილი დაჭრილი შვილის მოსანახულებლად ფრონტზე გაემგზავრება, როდესაც ადგილზე ჩააღწევს, შვილი ჰოსპიტალში აღარ დახვდება – გამოჯამრთელებული გოდერძი თავის ნაწილში დაბრუნებულა.გიორგი შვილის კვალს გაყვება და ფრონტის წინა ხაზზე აღმოჩნდება.',
          image: 'jariskacis_mama.jpg'
        },
        {
          id: 'ca455b53-fbc3-4d96-8fc6-2c39babae78a',
          name:'უდიპლომო სასიძო', 
          year: '1961',
          director: 'ლევან ხოტივარი',
          country: 'საქართველო',
          description: 'კოტე მგალობლიშვილი, დუდუხანა წეროძე, ბელა მირიანაშვილი, აკაკი კვანტალიანი, ვახტანგ ნინუა, თენგიზ მაისურაძე, დოდო აბაშიძე, ზანდა იოსელიანი, აკაკი ვასაძე და სხვა.',
          image: 'udiplomo.jpg'
        },
        {
          id: '33ad0414-f525-4a1c-ab52-63d6756a9aee',
          name:'ნატვრის ხე', 
          year: '1977',
          director: 'თენგიზ აბულაძე',
          country: 'საქართველო',
          description: 'ფილმი სოფლის ცხოვრებას ასახავს. სიუჟეტის მთავარ ხაზს მარიტასა და გედიას სიყვარულის ამბავი შეადგენს. მშვენიერი მარიტა იძულებული გახდება მამის ნებას დაჰყვეს და შეძლებულ შეთეს მისთხოვდეს, თუმცა მისი გული დიდი ხანია გედიას ეკუთვნის. ფილმი გადაღებულია გიორგი ლეონიძის მოთხრობების კრებულის "ნატვრის ხე" მიხედვით.',
          image: 'natvris_xe.jpg'
        },
        {
          id: 'ff829e46-4c94-44b0-b774-b2007d8f97a3',
          name:'არაჩვეულებრივი გამოფენა', 
          year: '1968',
          director: 'ელდარ შენგელაია',
          country: 'საქართველო',
          description: 'პროვინციელი მოქანდაკე აგული ერისთავი მასწავლებლის ნაჩუქარი მარმარილოს ქვისგან არაჩვეულებრივი მონუმენტის შექმნაზე ოცნებობს. მაგრამ ფრონტიდან დაბრუნების შემდეგ მხოლოდ დაკვეთით მუშაობს – მიცვალებულთა ბიუსტებს აკეთებს, რადგან დიდი ოჯახი ჰყავს სარჩენი. ერთ დღეს სკოლის ამხანაგებთან შეხვედრიდან შინ მიმავალი შექეიფიანებული აგული ცოლთან ერთად სასაფლაოზე – თავის “პერსონალურ გამოფენაზე” – აღმოჩნდება და სევდანარევი იუმორით აღიარებს, რომ ნიჭი ტყუილუბრალოდ გაფლანგა. ოცნების მარმარილოს კი თავის მოწაფეს გადაულოცავს…',
          image: 'arachveulebrivi_gamofena.jpg'
        },
        {
          id: '421a5ede-4f61-4119-90e3-030879b6848d',
          name:'დათა თუთაშხია', 
          year: '1977',
          director: ['გიზო გაბესკირია', ' გიგა ლორთქიფანიძე'],
          country: 'საქართველო',
          description: 'ჭაბუა ამირეჯიბის ცნობილი რომანის ეკრანიზაცია.',
          image: 'data_tutashkhia.jpg'
        },
        {
          id: '8222763c-9a33-4b15-b420-9d31c5a7fdf2',
          name: 'ბურთი და მოედანი',
          year: '1961',
          director: 'გუგული მაღალაშვილი',
          country: 'საბჭოთა კავშირი',
          description: 'ფილმი ფეხბურთზე ფანატიკურად შეყვარებულ გულშემატკივარ ბუღალტერზე მოგვითხრობს, რომელიც მრავალ კურიოზულ, გაუგებრობით აღსავსე თავგადასავალში გაეხვევა, სანამ სასურველ მატჩზე მოხვდება',
          image: 'burti_moedani.jpg'
        }
      ],
      editVisibility: false,
      addVisibility: false,
      uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      },
      editElements: {
        id: '',
        name: '',
        director: '',
        genre: '',
        country: '',
        year: '',
        description: ''
      }
    }
  },
  methods: {
    addMovie(){
      this.addVisibility = true
      this.editVisibility = false
    },
    // saveEditChanges(id, name, director, genre, country, year, description) {
    //   const findMovieOfIdForEdit = this.movies.find(e => e.id === id)
    //   findMovieOfIdForEdit.name = name
    //   findMovieOfIdForEdit.director = director
    //   findMovieOfIdForEdit.genre = genre
    //   findMovieOfIdForEdit.country = country
    //   findMovieOfIdForEdit.year = year
    //   findMovieOfIdForEdit.description = description
    // },
    //  
    // saveEditChanges(id, name, director, genre, country, year, description) {
    //   const findIndexForEdit = this.movies.findIndex(e => e.id === id)
    //   this.movies.splice(findIndexForEdit, 1)
    //   this.movies.unshift({
    //     id: this.uuidv4(),
    //     name,
    //     director,
    //     genre,
    //     country,
    //     description
    //   })
    //   this.editVisibility = false
    // },
    saveEditChanges(id,name, director, genre, country, year, description) {
      const findMovieOfIdForEdit = this.movies.find(e => e.id === id)
    
      // this.editElements.name = name
      console.log(this.editElements.name);
      if(name === '') {
        alert('please enter name')
        findMovieOfIdForEdit.name = this.editElements.name
      }else {
        findMovieOfIdForEdit.name = name
      }
      if(director === '') {
        findMovieOfIdForEdit.director = this.editElements.director
      }else {
        findMovieOfIdForEdit.director = director
      }
      if(name === '') {
        findMovieOfIdForEdit.genre = this.editElements.genre
      }else {
        findMovieOfIdForEdit.genre = genre
      }
      if(director === '') {
        findMovieOfIdForEdit.country = this.editElements.country
      }else {
        findMovieOfIdForEdit.country = country
      }
      if(name === '') {
        findMovieOfIdForEdit.year = this.editElements.year
      }else {
        findMovieOfIdForEdit.year = year
      }
      if(director === '') {
        findMovieOfIdForEdit.description = this.editElements.description
      }else {
        findMovieOfIdForEdit.description = description
      }
      this.editVisibility = false
    },
    saveChanges(name, director, genre, country, description) {
      this.movies.unshift({
        id: this.uuidv4(),
        name,
        director,
        genre,
        country,
        description
      })
      this.addVisibility = false
    },
    // edit(id){
    //   this.editVisibility = true
    //   this.addVisibility = false

    //   const findMovieOfId = this.movies.find(e => e.id === id)
    //   this.editElements.id = id
    //   this.editElements.name = findMovieOfId.name
    //   this.editElements.director = findMovieOfId.director
    //   this.editElements.genre = findMovieOfId.genre
    //   this.editElements.country = findMovieOfId.country
    //   this.editElements.year = findMovieOfId.year
    //   this.editElements.description = findMovieOfId.description
    // },
    edit(id){
      this.editVisibility = true
      this.addVisibility = false

      const findMovieOfId = this.movies.find(e => e.id === id)
      this.editElements.id = id
      this.editElements.name = findMovieOfId.name
      this.editElements.director = findMovieOfId.director
      this.editElements.genre = findMovieOfId.genre
      this.editElements.country = findMovieOfId.country
      this.editElements.year = findMovieOfId.year
      this.editElements.description = findMovieOfId.description
    },
    deleteMovie(movieId){
      const movieIndex = this.movies.findIndex(movie => movie.id == movieId)

      this.movies.splice(movieIndex, 1)

    },
    closeModal() {
      this.editVisibility = false
      this.addVisibility = false
      
    }
  }
}
</script>

<style>
  .container {
    max-width: 1840px;
  }
</style>
