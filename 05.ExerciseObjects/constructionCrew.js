function constructionCrew(worker){
    if (worker.dizziness === true){
        let amountToAdd = (0.1 * worker.weight) * worker.experience;
        worker.levelOfHydrated += amountToAdd;
        worker.dizziness = false;
    }
    return worker;
}