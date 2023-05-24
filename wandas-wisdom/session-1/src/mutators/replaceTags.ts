function replaceTags(newTags: any): void {
    const tagsDiv: HTMLElement | null = document.getElementById('tags')

    if (tagsDiv) {
        while (tagsDiv.hasChildNodes()) {
            const firstTag: ChildNode = tagsDiv.firstChild as ChildNode
        
            tagsDiv.removeChild(firstTag)
        }
        
        newTags.forEach((tag: string): void => {
            const tagSpan: HTMLElement = document.createElement('span')

            tagSpan.innerText = tag
            tagsDiv.appendChild(tagSpan)
        })
}
    else {
        throw new Error(`No element called 'tagsDiv' exists`)
    }
}

export default replaceTags
