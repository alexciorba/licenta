package ro.pex.hotel.model.entity;

import java.util.*;
import javax.persistence.*;

@Entity
@Table(name = "reservations")
public class Reservation {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private Date StartDate;

	private Date EndDate;

	private Date ReservationDate;

	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;

	@OneToMany(mappedBy = "reservation")
	private Set<Room> rooms = new HashSet<>();

	@OneToMany(mappedBy = "reservation")
	private Set<Facility> facilities = new HashSet<>();

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getStartDate() {
		return StartDate;
	}

	public void setStartDate(Date StartDate) {
		this.StartDate = StartDate;
	}

	public Date getEndDate() {
		return EndDate;
	}

	public void setEndDate(Date EndDate) {
		this.EndDate = EndDate;
	}

	public Date getReservationDate() {
		return ReservationDate;
	}

	public void setReservationDate(Date ReservationDate) {
		this.ReservationDate = ReservationDate;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

}
