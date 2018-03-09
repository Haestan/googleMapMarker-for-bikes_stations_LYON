const App = {
    map: Object.create(Googlemap),
    slider: Object.create(Slider),
    scrollTop: Object.create(ScrollTop),
    reservation: Object.create(Reservation),
    App_run: function () {
        this.map.launch_functions_map();
        this.slider.launch_functions_slider();
        this.scrollTop.launch_jQuery_scroll();
        this.reservation.launch_functions_sessionStorage();
    }
};