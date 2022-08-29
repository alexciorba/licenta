package ro.pex.hotel.resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ro.pex.hotel.model.entity.Reservation;
import ro.pex.hotel.resource.impl.UserResourceImpl;
import ro.pex.hotel.service.ReservationService;

@RestController
@RequestMapping("/reservation")

public class ReservationResource {
    private  ReservationService reservationService;
    private static Logger log = LoggerFactory.getLogger(UserResourceImpl.class);

    public ReservationResource(ReservationService reservationService) {
        this.reservationService = reservationService;
    }

    @PostMapping(value= "/add", produces = MediaType.APPLICATION_JSON_VALUE,consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Reservation> addReservation(@RequestBody Reservation reservation) {
        Reservation newReservation = reservationService.createReservation(reservation);
        return new ResponseEntity<>(newReservation, HttpStatus.CREATED);
    }

}
