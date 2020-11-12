new Vue({
  el: '#app',
  data: {
      danu: {
          nama: 'Danuhadi',
          npm: '180709770',
          kelas: 'PAW A',
      },
      todos:[
            
      ],
      counter: 3,
      status: false,
      jawaban: false,
      angkaBenar: Math.floor(Math.random() * 10) + 1,
      input: null
  },

  methods: {
      checkForm: function (e) {
          if (this.angkaBenar == this.input) {
              this.jawaban = true;
              this.status = true;
              this.counter = 3;
          } else {
              this.jawaban = false;
              this.status = true;
              this.counter--;
          }
          e.preventDefault();
          console.log(angkaBenar)
      },
      mulai() {
          this.jawaban = false;
          this.status = false;
          this.input = null;
      },
      lagi(){
        location.reload();
        },

    save() {
        let note = document.getElementById('note');
        let title = document.getElementById('title');
        let priority = document.getElementById('priority');
            
        let todo = {
            title : title.value,
            priority : priority.value,
            note : note.value,
        }
        document.getElementById('note').value="";
        document.getElementById('title').value="";
        document.getElementById('priority').value="";
        this.todos.push(todo);
        console.log(this.todos);
    },
    reset(){
        document.getElementById('note').value="";
        document.getElementById('title').value="";
        document.getElementById('priority').value="";
    },
    del(index){
        this.todos.splice(index,1);
    },
},
});
