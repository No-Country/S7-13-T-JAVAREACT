package server.model.repository;

import server.model.entity.Portafolio;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PortafolioRepository extends JpaRepository<Portafolio, Long> {
}
