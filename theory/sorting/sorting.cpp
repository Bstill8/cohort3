#include <iostream>
#include <ctime>
#include <stdlib.h>
using namespace std;

int array_randomizer(int data[], int size);
int main(){
    int *small = new int[100];
    int *medium = new int[10000];
    int *large = new int[1000000];
    clock_t start;
    start = clock();
    double duration;
    array_randomizer(small, 100);
    cout << sizeof(small)/sizeof(int);
    for(int i = 0; i<100; i++){
        cout << small[i] << endl;
    }

    


    return 0;
}

int array_randomizer(int data[], int size){
    for(int i = 0; i<size; i++){
        data[i] = rand();
    }
    return 0;
}   