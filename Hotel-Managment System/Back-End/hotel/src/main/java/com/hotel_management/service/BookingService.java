package com.hotel_management.service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hotel_management.model.Booking;
import com.hotel_management.repository.BookingRepository;


@Service
public class BookingService {

    @Autowired
    private BookingRepository repo;

    public Booking saveBooking(Booking booking){
        return repo.save(booking);
    }

    public java.util.List<Booking> getAllBookings(){
        return repo.findAll();
    }
    
    public void deleteBooking(int id){
        repo.deleteById(id);
    }
}
