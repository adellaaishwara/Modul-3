Vue.component('showform', {
    template: '#show-form',
    data(){
        return {
            data: { nama: '', absen: '', kelas: ''}
        }
    },
    methods: {
        simpan: function() {
            this.$emit('send-data', this.data);
            this.data.nama = "";
            this.data.absen = "";
            this.data.kelas = "";
        }
    }
})

Vue.component('showdata', {
    template: '#show-data',
    props: ['data']
})

var app = new Vue({
    el: '#app',
    data: {
        formulir: {}
    },
    methods: {
        getData: function (value) {
            this.formulir = {
                nama : value.nama,
                absen : value.absen,
                kelas : value.kelas
            }
        }
    }
})
