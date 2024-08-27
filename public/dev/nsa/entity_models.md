# Référence pour la getstion des entités

## Avant de commencer...

Toutes les entités, archives, votes, procès, etc. sont identifiées par un identifiant unique invoqué par la classe `NSID`. Il suffit de mettre l'ID Discord s'il s'agit d'un membre, ou le timestamp pour un autre exemple, puis la conversion se fait automatiquement.

### Exemple

```py
from nsarchive import NSID

entity = nsarchive.User(NSID(123456)) # La majorité des classes définies dans cette documentation seront initiées de cette façon, les autres seront générées par le module.
```

> Cette page part du principe que vous savez manipuler l'instance [Entities](/dev/nsa/entity_instance) proposée par NSArchive.


## Modèles de base

### `nsarchive.Entity`
Représente une entité (comme un utilisateur ou une organisation).

**Attributs:**
- `id`: (`NSID`) Identifiant hexadécimal de l'entité.
- `name`: (str) Nom de l'entité.
- `registerDate`: (int) Date d'enregistrement de l'entité.
- `legalPosition`: (`Position`) Position légale de l'entité.

**Méthodes:**
- `set_name(new_name: str) -> None`: Définit un nouveau nom pour l'entité, lève une exception si le nom dépasse 32 caractères.
- `set_position(position: str) -> None`: Définit la position légale de l'entité.

### `nsarchive.User`
Représente un utilisateur avec des permissions et des niveaux d'expérience.

**Attributs:**
- `xp`: (int) Points d'expérience de l'utilisateur.
- `boosts`: (dict[str, int]) Boosts d'expérience de l'utilisateur.
- `permissions`: (`PositionPermissions`) Permissions de l'utilisateur, basées sur sa position légale.
- `votes`: (list[str]) Liste des votes auxquels l'utilisateur a participé.
- Attributs de `Entity`

**Méthodes:**
- `add_vote(id: str | NSID)`: Ajoute une participation de vote à l'utilisateur.
- `get_level() -> int`: Calcule le niveau de l'utilisateur basé sur son XP.
- `add_xp(amount: int) -> None`: Ajoute des points d'expérience à l'utilisateur en appliquant un boost.
- `edit_boost(name: str, multiplier: int = -1) -> None`: Modifie un boost existant ou le supprime (`-1`).
- Méthodes de `Entity`

### `nsarchive.Organization`
Représente une entité collective.

**Attributs:**
- `owner`: (`Entity`) Propriétaire de l'organisation, aussi bien un membre qu'une autre organisation.
- `certifications`: (dict) Certifications (officielles ou non) de l'organisation.
- `members`: (list[`GroupMember`]) Membres de l'organisation.
- `avatar`: (bytes) Avatar de l'organisation.
- Attributs de `Entity`

**Méthodes:**
- `add_certification(certif: str) -> None`: Ajoute une certification à l'organisation.
- `add_member(member: GroupMember) -> None`: Ajoute un membre à l'organisation.
- `remove_member(member: GroupMember) -> None`: Supprime un membre de l'organisation.
- `set_owner(member: User) -> None`: Définit le propriétaire de l'organisation.
- `get_member_id() -> list[str]`: Retourne une liste des identifiants des membres de l'organisation.
- Méthodes de `Entity`


## Positions et métiers

### `nsarchive.PositionPermissions`

Cette classe correspond aux permissions que peut offrir une position à un utilisateur. Il y a deux moyens de récupérer une liste de permissions:

- Récupérer celles d'un `User` qui sont générées selon sa position, via l'attribut `.permissions`
- Récupérer directement celles qu'offre une `Position`, via le même attribut `.permissions`

La liste officielle des permissions est tenue à jour [sur cette page](/dev/nsa/entity_permissions).

**Modifier les permissions:**
Vous pouvez temporairement modifier les permissions d'un membre grâce à la méthode `edit(**permissions: bool)`.
Cette permission prend comme arguments toutes les permissions listées dans la liste officielle.

**Exemple:**
```py
user = entities_instance.get_entity(NSID(1234))

user.permissions.edit(approve_laws = True)
```
Ceci dit, cette méthode ne présente aucun réel intérêt de votre côté car les permissions sont générées en fonction de la position de l'entité, ce qui rendra vos modifications inutiles sur le long terme.

### `nsarchive.Position`
Représente une position légale avec des permissions spécifiques.

**Attributs:**
- `name`: (str) Titre de la position.
- `id`: (str) Identifiant de la position **ATTENTION: Pas sous forme NSID**
- `permissions`: (`PositionPermissions`) Objet définissant les permissions associées à cette position.


## Rôles dans une organisation

### `MemberPermissions`
Gère les permissions d'un utilisateur au sein d'un groupe.

**Ne pas confondre avec `PositionPermissions` qui s'applique à l'échelle de toute la Nation !**

**Permissions:**
- `manage_organization`: Possibilité de renommer ou changer le logo d'une organisation.
- `manage_members`: Possibilité de gérer les membres d'une organisation (inviter, retirer, changer les rôles).
- `manage_roles`: Possibilité de promouvoir ou rétrograder les membres au sein de l'organisation.

**Méthodes:**
- `edit(**permissions: bool)`: Modifie les permissions de l'utilisateur au sein du groupe.

### `nsarchive.GroupMember`
Représente un membre d'un groupe avec des permissions spécifiques.

**Attributs:**
- `id`: (`NSID`) Identifiant national du membre.
- `permissions`: (`MemberPermissions`) Permissions spécifiques au membre.
- `position`: (str) Position du membre au sein du groupe (ex: membre).

### `nsarchive.Official`
Représente un fonctionnaire de l'État ainsi que ses contributions.

**Attributs:**
- `id`: (`NSID`) Identifiant de le membre.
- `mandates`: (dict) Nombre de mandats (par position) occupés par le membre (Président, Ministre, etc.).
- `contributions`: (dict) Contributions de le membre (projets, votes, actions administratives).