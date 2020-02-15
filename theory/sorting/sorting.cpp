#include <iostream>
#include <ctime>
#include <stdlib.h>
using namespace std;

void array_randomizer(int data[], int32_t size);
void bubble_sort(int data[], int32_t size);
bool validator(int array[], int32_t size);
int main()
{
    int *small = new int[100];
    int *medium = new int[10000];
    int *large = new int[1000000];
    // clock_t start;
    // start = clock();
    // double duration;
    array_randomizer(large, 1000000);
    bubble_sort(large, 1000000);
    if(validator(large, 1000000))
    {
        cout << "Valid";
    }else
    {
        cout << "Invalid";
    }
    


    delete small;
    delete medium;
    delete large;

    return 0;
}

void array_randomizer(int data[], int32_t size)
{
    for (int32_t i = 0; i < size; i++)
    {
        data[i] = rand();
    }
    return;
}
bool validator(int array[], int32_t size){
    for(int32_t i = 0; i < size - 1; i++)
    {
        if(array[i] > array[i+1])
        {
            return false;
        }
    }
    return true;
}
void bubble_sort(int data[], int32_t size)
{    
    bool swapped = true;
    int32_t iter = 1;
    while (swapped == true)
    {
        swapped = false;
        int current = data[0];
        for (int32_t i = 0; i < size - iter; i++)
        {
            if (current >= data[i + 1])
            {
                data[i] = data[i + 1];
                if (i == size - 2)
                {
                    data[i + 1] = current;
                }
                swapped = true;
            }
            else
            {
                data[i] = current;
                current = data[i + 1];
                
            }
            if(i == size - 2)
            {
                current = data[0];
            }
        }
        iter ++;
    }
    return;
}