#include <iostream>
#include <ctime>
using namespace std;

int main(){
    int small[100];
    int medium[10000];
    int large[1000000];
    clock_t start;
    start = clock();
    double duration;
    


    return 0;
}

int array_generator(int data[]){
    for(int i = 0; i<sizeof(data); i++){
        data[i] = rand();
    }
    return 0;
}   