package ro.pex.hotel.model.entity;

import javax.persistence.*;

@Entity
@Table(name = "facilities")
public class Facility {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String Description;

	private int Price;

	@ManyToOne
	@JoinColumn(name = "reservation_id")
	private Reservation reservation;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDescription() {
		return Description;
	}

	public void setDescription(String Description) {
		this.Description = Description;
	}

	public int getPrice() {
		return Price;
	}

	public void setPrice(int Price) {
		this.Price = Price;
	}

}
