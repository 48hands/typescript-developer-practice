import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { ChaactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

// const charctersCollection = new ChaactersCollection('Xaayb');
// const sorter = new Sorter(charctersCollection);
// sorter.sort();
// console.log(charctersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

const sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print();
