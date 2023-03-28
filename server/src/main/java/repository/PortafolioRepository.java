package repository;

import model.Portafolio;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PortafolioRepository extends JpaRepository<Portafolio, Long> {
}
