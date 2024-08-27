# EntityInstance

L'instance `EntityInstance` permet d'interagir avec les profils des membres, les métiers, et les secteurs d'activité au sein de la base de données. Elle vous permettra entre autres de jouer avec les différents [modèles d'entités](/dev/nsa/entity_models) proposés par le module.

## Méthodes disponibles

### `get_entity(id: str | NSID) -> User | Organization | Entity`

Récupère le profil public d'une entité.

- **Paramètres**:
  - `id` (NSID): ID hexadécimal de l'entité à récupérer.
  
- **Retourne**:
  - `User` si l'entité est un membre.
  - `Organization` si c'est un groupe.
  - `Entity` si c'est indéterminé.

### `save_entity(entity: Entity) -> None`

Crée ou modifie une entité dans la base de données.

- **Paramètres**:
  - `entity` (Entity): L'entité à sauvegarder (peut être un `User` ou une `Organization`).

### `delete_entity(entity: Entity) -> None`

Supprime le profil d'une entité.

- **Paramètres**:
  - `entity` (Entity): L'entité à supprimer (peut être un `User` ou une `Organization`).

### `fetch_entities(query: dict = None, listquery: dict | None = None) -> list[Entity | User | Organization]`

Récupère une liste d'entités selon une requête.

- **Paramètres**:
  - `query` (dict): La requête pour filtrer les entités.
  - `listquery` (dict | None): Requête secondaire pour filtrer les listes contenant un certain élément.

- **Retourne**:
  - Liste d'entités (`Entity`, `User`, `Organization`).

### `get_entity_groups(id: str | NSID) -> list[Organization]`

Récupère les groupes auxquels appartient une entité.

- **Paramètres**:
  - `id` (NSID): ID de l'entité.

- **Retourne** :
  - Liste d'organisations (`Organization`).

### `get_position(id: str) -> Position`

Récupère une position légale (métier, domaine professionnel).

- **Paramètres**:
  - `id` (str): ID de la position.

- **Retourne**:
  - `Position`.