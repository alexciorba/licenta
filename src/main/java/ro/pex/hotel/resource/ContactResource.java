package ro.pex.hotel.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ro.pex.hotel.model.entity.Contact;
import ro.pex.hotel.model.repository.ContactRepository;

@RestController
@RequestMapping(value = "/contact")
public class ContactResource {
    @Autowired
    private ContactRepository contactRepository;

    @PostMapping(value = "/add", produces = MediaType.APPLICATION_JSON_VALUE,consumes = MediaType.APPLICATION_JSON_VALUE)

    public void addContact(@RequestBody Contact contact){
        contactRepository.save(contact);

    }
}
