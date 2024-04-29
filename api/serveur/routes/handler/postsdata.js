import { posts } from "../../../database/call.js";

const data = {
    posts() {
        return posts([
            this.id_user = 1,
            this.time = new Date(),
            this.title = "Soirée de l'année",
            this.location = "Paris",
            this.participant =  100,
            this.content = "Venez nombreux à la soirée de l'année",
            this.timetable = "2022-12-31 23:59:59"
        ]);
    }
};

export async function getPostsHandler(req, res) {
    try {
        // Appel de la fonction pour récupérer tous les posts de la base de données
        const allPosts = data; // Attendre que la promesse se résolve
        console.log(allPosts);

        // Si aucun post trouvé, envoyer un message approprié
        if (!allPosts || allPosts.length === 0) {
            return res.status(200).json({ message: "Aucun post trouvé" });
        }else {
            return res.status(200).json({ posts: allPosts });
        }
    } catch (error) {
        // En cas d'erreur, renvoyer un code d'erreur 500 avec un message approprié
        console.error("Erreur lors de la récupération des posts :", error);
        return res.status(500).json({ error: "Erreur interne du serveur" });
    }
}
