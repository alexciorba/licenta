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
	private String Name;
	private String Surname;
	private String Address;
	private String Town;
	private String City;
	private String PostalCode;
	private String Phone;
	private String Email;

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	public String getSurname() {
		return Surname;
	}

	public void setSurname(String surname) {
		Surname = surname;
	}

	public String getAddress() {
		return Address;
	}

	public void setAddress(String address) {
		Address = address;
	}

	public String getTown() {
		return Town;
	}

	public void setTown(String town) {
		Town = town;
	}

	public String getCity() {
		return City;
	}

	public void setCity(String city) {
		City = city;
	}

	public String getPostalCode() {
		return PostalCode;
	}

	public void setPostalCode(String postalCode) {
		PostalCode = postalCode;
	}

	public String getPhone() {
		return Phone;
	}

	public void setPhone(String phone) {
		Phone = phone;
	}

	public String getEmail() {
		return Email;
	}

	public void setEmail(String email) {
		Email = email;
	}



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
