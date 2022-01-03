/*
 * @lc app=leetcode id=146 lang=cpp
 *
 * [146] LRU Cache
 */

// @lc code=start
class LRUCache
{
public:
    struct Node
    {
        int val;
        int key;
        Node *prev;
        Node *next;
    };
    struct DoubleLL
    {
        Node *head;
        Node *tail;
        DoubleLL()
        {
            head = new Node{};
            tail = new Node{};
            head->next = tail;
            tail->prev = head;
        }
        void add(Node *node)
        {
            Node *nextNode = head->next;
            head->next = node;
            node->prev = head;
            node->next = nextNode;
            nextNode->prev = node;
        }
        void remove(Node *node)
        {
            Node *prevNode = node->prev;
            Node *nextNode = node->next;
            prevNode->next = nextNode;
            nextNode->prev = prevNode;
        }
    };

    int maxCapacity;
    int currCapacity = 0;
    unordered_map<int, Node *> lookupMap;
    DoubleLL linkedList;

    LRUCache(int capacity)
    {
        // initialize doubly linked list
        // hashmap of pointers with key as key
        // and value as pointer to linked list
        // if capacity exceeded, remove tail
        // of linked list
        // on gets, shift linked list node
        // to head
        // O(k) get O(k) put
        maxCapacity = capacity;
    }

    int get(int key)
    {
        if (lookupMap[key])
        {
            // shift node to head position
            Node *currNode = lookupMap[key];
            linkedList.remove(currNode);
            linkedList.add(currNode);
            return lookupMap[key]->val;
        }
        else
        {
            return -1;
        }
    }

    void put(int key, int value)
    {
        // check capacity
        if (currCapacity == maxCapacity)
        {
            // check if we are replacing an existing node
            if (lookupMap[key])
            {
                linkedList.remove(lookupMap[key]);
                // add
                Node *newNode = new Node{value, key};
                linkedList.add(newNode);
                lookupMap[key] = newNode;
            }
            else
            {
                // remove last node
                Node *lastNode = linkedList.tail->prev;
                linkedList.remove(lastNode);
                lookupMap.erase(lastNode->key);
                // add
                Node *newNode = new Node{value, key};
                linkedList.add(newNode);
                lookupMap[key] = newNode;
            }
        }
        else
        {
            // remove prev value if key already set
            if (lookupMap[key])
            {
                linkedList.remove(lookupMap[key]);
                // add
                Node *newNode = new Node{value, key};
                linkedList.add(newNode);
                lookupMap[key] = newNode;
            }
            else
            {
                // add
                Node *newNode = new Node{value, key};
                linkedList.add(newNode);
                lookupMap[key] = newNode;
                currCapacity++;
            }
        }
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache* obj = new LRUCache(capacity);
 * int param_1 = obj->get(key);
 * obj->put(key,value);
 */
// @lc code=end
