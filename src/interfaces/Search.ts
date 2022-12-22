export interface ISearchProps {
	searchPhrase: string;
	setSearchPhrase: (searchPhrase: string) => void;
	clicked: boolean;
	setClicked: (clicked: boolean) => void;
}
