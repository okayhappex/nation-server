# Démarrer avec NS Archive

## Pré-requis

- [Python 3.10](https://python.org/downloads) ou plus récent (avec pip)
- Un token [Deta](https://deta.space) créé par vous ou fourni par un administrateur
- Un bon petit capuccino pour partir en bons termes

## Installation

> Il est conseillé de créer un environnement virtuel avant de commencer à installer NSArchive et/ou d'autres modules que vous utiliserez éventuellement dans votre projet:

### Procédez à la création de l'environnement

```sh
python -m venv .venv
```

Ensuite, procédez à l'activation de l'environnement virtuel...

- **Windows:**
```sh
.venv/Scripts/activate
```

- **Systèmes basés sur Unix (MacOS, Linux...):**
```sh
source .venv/Scripts/activate.bat
```

Vous saurez que l'environnement virtuel est activé lorsque la mention `(venv)` précèdera ou apparaîtra en haut de votre chemin d'accès dans le terminal.


L'installation du module NSArchive ne peut se faire que sur [PyPI](https://pypi.org) via la commande suivante:

```sh
python -m pip install nsarchive
```

## Premiers pas

Il y a au total trois bases de données plus ou moins sensibles les unes que les autres dans notre serveur. Chacune de ces bases est gérée par sa propre instance:

### 1- Les entités (sans leur compte en banque) 

Les entités sont gérées par l'instance [`EntityInstance`](/dev/nsa/entity_instance). Cette base de données contient les différentes informations relatives au **profil** de tous les membres ainsi que des entreprises qu'ils ont créées, mais elles contiennent également toutes les fiches métier / position légale.

### 2- La banque

La banque contient tous les comptes ainsi que la totalité des articles en circulation sur le serveur. Sa sensibilité critique oblige à restreindre son accès aux administrateurs uniquement. Elle est gérée par l'instance [`BankInstance`](/dev/nsa/bank_instance).

### 3- Les institutions

Les [institutions](/institutions) réunissent toutes les organisations qui structurent la République, soit:
- Le Conseil d'Administration
- Le Gouvernement (Président de la République + Ministres)
- L'Assemblée Nationale (Président de l'Assemblée + Députés)
- Le Tribunal (Ministre de la Justice + Juges)
- Le Commissariat (Ministre de l'Intérieur + Agents)

Ces institutions sont gérées par l'instance [`RepublicInstance`](/dev/nsa/republic_instance), qui comporte également tous les résultats de votes.