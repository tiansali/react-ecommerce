export const adaptProductFromFirestore = (originalDoc) => {
    const data = originalDoc.data()

    const formattedDoc = {
        id: originalDoc.id,
        ...data
    }
    
    return formattedDoc
}