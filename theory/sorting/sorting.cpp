#include <iostream>
#include <ctime>
#include <stdlib.h>
using namespace std;

int counter = 0;
void array_randomizer(int data[], int32_t size);
void bubble_sort(int data[], int32_t size);
void selection_sort(int data[], int32_t size);
void insertion_sort(int data[], int32_t size);
void quick_sort(int data[], int32_t hi, int32_t lo = 0);
bool validator(int array[], int32_t size);
int main()
{
    int *test = new int[4];
    int *small = new int[100];
    int *medium = new int[10000];
    int *large = new int[1000000];
    // clock_t start;
    // start = clock();
    // double duration;
    
    test[6];
    test[3];
    test[8];
    test[1];
    //array_randomizer(test, 4);
    clock_t start = clock();
    quick_sort(test, 4);
    cout << counter;
    clock_t end = clock();
    if(validator(test, 4))
    {
        cout << "Valid" << endl;
    }else
    {
        cout << "Invalid" << endl;
    }
    cout << (((float)(end - start))/CLOCKS_PER_SEC)/3600 << " hours";


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
void selection_sort(int data[], int32_t size)
{
    int temp;
    for(int32_t i = 0; i < size; i++)
    {
        for(int32_t j = i; j < size; j++)
        {
            if(data[j] < data[i])
            {
                temp = data[i];
                data[i] = data[j];
                data[j] = temp;
            }
        }
    }
    return;
}
void insertion_sort(int data[], int32_t size)
{
    int temp;
    for(int32_t i = 1; i < size; i++)
    {
        temp = data[i];
        for(int32_t j = i - 1; j >= 0; j--)
        {
            if(temp < data[j])
            {
                data[j + 1] = data[j];
            }else
            {
                data[j + 1] = temp;
            }
            
        }
    }
    return;
}

void quick_sort(int data[], int32_t hi, int32_t lo)
{
    counter++;
    if(lo < hi)
    {
        int temp;
        int pivot = hi - 1;
        int i = lo;
        for(int32_t j = lo; j < hi; j++)
        {
            if(data[j] < data[pivot])
            {
                temp = data[i];
                data[i] = data[j];
                data[j] = temp;
                i++;
            }
        }
        temp = data[i];
        data[i] = data[pivot];
        data[hi - 1] = temp;
        
        quick_sort(data, i, 0);
        
        quick_sort(data, hi, i + 1);
        
    }
    return;
}