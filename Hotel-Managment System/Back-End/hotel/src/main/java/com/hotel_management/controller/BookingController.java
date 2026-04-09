package com.hotel_management.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.hotel_management.model.Booking;
import com.hotel_management.service.BookingService;

import java.util.List;


@RestController
@CrossOrigin
@RequestMapping("/api")
public class BookingController {

    @Autowired
    private BookingService service;

    // Save booking
    @PostMapping("/booking")
    public Booking book(@RequestBody Booking booking){
        return service.saveBooking(booking);
    }

    // Get all bookings (for MyBooking page)
    @GetMapping("/bookings")
    public List<Booking> getBookings(){
        return service.getAllBookings();
    }
    @DeleteMapping("/booking/{id}")
    public String deleteBooking(@PathVariable int id){
        service.deleteBooking(id);
        return "Booking Cancelled";
    }
}
